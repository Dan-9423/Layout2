import { BarChart2, FileText, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  icon: JSX.Element;
}

export default function DashboardNav() {
  const navItems: NavItem[] = [
    {
      title: 'Overview',
      href: '/overview',
      icon: <BarChart2 className="w-4 h-4" />,
    },
    {
      title: 'Medical Reports',
      href: '/reports',
      icon: <FileText className="w-4 h-4" />,
    },
    {
      title: 'Patients Overview',
      href: '/patients',
      icon: <Users className="w-4 h-4" />,
    },
  ];

  // In a real app, you'd use your router's current path
  const currentPath = '/overview';

  return (
    <nav className="flex items-center space-x-6 border-b border-gray-200 dark:border-gray-800 px-2">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center space-x-2 py-4 px-2 text-sm font-medium border-b-2 transition-colors hover:text-blue-600',
            currentPath === item.href
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 dark:text-gray-400'
          )}
        >
          {item.icon}
          <span>{item.title}</span>
        </a>
      ))}
    </nav>
  );
}