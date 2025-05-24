# Modern Blog Application

A full-stack blog application built with Next.js 14, featuring a modern UI, real-time interactions, and robust authentication system.

## 🌟 Features

### Authentication & User Management
- Secure user authentication using NextAuth.js
- Email/password-based registration and login
- Protected routes and API endpoints
- User profile management with image upload
- Role-based access control (User/Admin roles)
- Password hashing and secure session management

### Blog Management
- Create, read, update, and delete blog posts
- Rich text editor for blog content
- Image upload and management for blog posts
- Categories and tags for better content organization
- Real-time like and comment functionality
- Blog post search and filtering capabilities

### User Interface
- Responsive design that works on all devices
- Dark/Light mode support
- Modern and clean UI with Tailwind CSS
- Multiple view options for blog posts (Small, Medium, Large tiles)
- Interactive components with smooth animations
- Loading states and error handling
- Accessible design following WCAG guidelines

### Blog Post Features
- Title, description, and content management
- Featured images with optimized loading
- Author information and timestamps
- Like and comment counters
- Category and tag system
- Sorting options (by date, title)
- Search functionality

### Profile System
- User profile pages with activity statistics
- Profile image management
- Blog post count tracking
- Like and comment history
- Account settings management
- Password change functionality

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling and responsive design
- **NextAuth.js**: Authentication and session management
- **React Hook Form**: Form handling and validation
- **Next/Image**: Optimized image handling

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **PostgreSQL**: Relational database
- **Prisma**: Type-safe ORM
- **bcryptjs**: Password hashing
- **JWT**: Token-based authentication

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Git**: Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- PostgreSQL 12.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blog-app.git
cd blog-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/blogdb"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
npx prisma migrate dev
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
blog-app/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── blogs/          # Blog-related pages
│   │   └── profile/        # Profile pages
│   ├── components/         # Reusable components
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript types
├── prisma/                # Database schema
├── public/               # Static assets
└── styles/              # Global styles
```

## 🔒 Security Features

- Password hashing using bcrypt
- Protected API routes
- CSRF protection
- Rate limiting
- Input validation
- Secure session management
- XSS prevention
- SQL injection prevention

## 🎨 UI/UX Features

- Responsive design for all screen sizes
- Dark/Light mode support
- Loading states and animations
- Error handling and user feedback
- Accessible components
- Mobile-first approach
- Interactive elements
- Smooth transitions

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for different screen sizes
- Flexible grid layouts
- Responsive images
- Touch-friendly interfaces
- Adaptive typography
- Optimized for all devices

## 🔄 State Management

- React hooks for local state
- Server-side state management
- Optimistic updates
- Real-time data synchronization
- Form state management
- Session state handling

## 🧪 Testing

- Unit tests for components
- Integration tests for API routes
- End-to-end testing
- Form validation testing
- Authentication flow testing
- Performance testing

## 📈 Performance Optimization

- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- Database query optimization
- Bundle size optimization
- Server-side rendering
- Static site generation

## 🔧 Development Workflow

1. Create a new branch for features
2. Write tests for new features
3. Implement the feature
4. Run tests and linting
5. Create a pull request
6. Code review
7. Merge to main branch

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Abhishek - Github

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors who have helped with the project

## 📞 Support

For support, email abhisheknodejsdeveloper@gmail.com or create an issue in the repository.


![screencapture-localhost-3000-register-2025-05-24-21_47_49](https://github.com/user-attachments/assets/5425f7c3-7a65-49b2-a8b4-ac1bbe26a3f9)

![screencapture-localhost-3000-profile-2025-05-24-21_45_03](https://github.com/user-attachments/assets/85237275-2043-438e-87bc-93d8734d7949)

![screencapture-localhost-3000-profile-2025-05-24-21_44_36](https://github.com/user-attachments/assets/1c9b826f-dda0-4b3d-9956-559276b1ed4e)

![screencapture-localhost-3000-2025-05-24-21_41_46](https://github.com/user-attachments/assets/9c796a20-5604-4091-8ef8-d361173ae2af)

![screencapture-localhost-3000-2025-05-24-21_42_36](https://github.com/user-attachments/assets/009ba437-9d5c-40c9-8dc4-67ed9efa6abc)

![screencapture-localhost-3000-2025-05-24-21_42_06](https://github.com/user-attachments/assets/0df67719-820d-48cd-a930-a55b7b7dc949)




