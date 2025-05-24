import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getRow, updateRow, query } from '@/lib/db';
import bcrypt from 'bcryptjs';

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  created_at: string;
  image: string;
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get user profile with counts
    const user = await query(`
      SELECT 
        u.id,
        u.name,
        u.email,
        u.image,
        u.role,
        u.created_at,
        COUNT(DISTINCT b.id) as blog_count,
        COUNT(DISTINCT l.id) as like_count,
        COUNT(DISTINCT c.id) as comment_count
      FROM users u
      LEFT JOIN blogs b ON b.author_id = u.id
      LEFT JOIN likes l ON l.user_id = u.id
      LEFT JOIN comments c ON c.author_id = u.id
      WHERE u.email = $1
      GROUP BY u.id, u.name, u.email, u.image, u.role, u.created_at
    `, [session.user.email]);

    if (!user.rows[0]) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const profile = {
      ...user.rows[0],
      blog_count: parseInt(user.rows[0].blog_count),
      like_count: parseInt(user.rows[0].like_count),
      comment_count: parseInt(user.rows[0].comment_count),
    };

    // Remove sensitive data
    delete profile.password;
    delete profile.blog_count;
    delete profile.like_count;
    delete profile.comment_count;

    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { name, email, currentPassword, newPassword } = await request.json();

    // Get current user data
    const user = await getRow(
      'SELECT * FROM users WHERE email = $1',
      [session.user.email]
    ) as User | null;

    if (!user || !user.password) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Validate current password if changing password
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'Current password is required to set a new password' },
          { status: 400 }
        );
      }

      const isValidPassword = await bcrypt.compare(currentPassword, user.password);
      if (!isValidPassword) {
        return NextResponse.json(
          { error: 'Current password is incorrect' },
          { status: 400 }
        );
      }
    }

    // Check if email is being changed and if it's already taken
    if (email !== session.user.email) {
      const existingUser = await getRow(
        'SELECT * FROM users WHERE email = $1',
        [email]
      ) as User | null;

      if (existingUser) {
        return NextResponse.json(
          { error: 'Email is already taken' },
          { status: 400 }
        );
      }
    }

    // Prepare update data
    const updateData: Partial<User> = {
      name,
      email,
    };

    // Hash new password if provided
    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    // Update user profile
    const updatedUser = await updateRow(
      `UPDATE users SET ${Object.keys(updateData).map((key, i) => `${key} = $${i + 2}`).join(', ')} WHERE id = $1 RETURNING *`,
      [user.id, ...Object.values(updateData)]
    ) as User;

    // Remove sensitive data
    delete updatedUser.password;

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 