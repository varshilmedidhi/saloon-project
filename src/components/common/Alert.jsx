import React from 'react';
import { cn } from '../../utils/cn';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export function Alert({
  title,
  children,
  variant = 'info',
  className
}) {
  const variants = {
    success: {
      container: "bg-green-50 border-green-400",
      icon: CheckCircle,
      iconColor: "text-green-400",
      title: "text-green-800",
      text: "text-green-700"
    },
    error: {
      container: "bg-red-50 border-red-400",
      icon: XCircle,
      iconColor: "text-red-400",
      title: "text-red-800",
      text: "text-red-700"
    },
    warning: {
      container: "bg-yellow-50 border-yellow-400",
      icon: AlertCircle,
      iconColor: "text-yellow-400",
      title: "text-yellow-800",
      text: "text-yellow-700"
    },
    info: {
      container: "bg-blue-50 border-blue-400",
      icon: Info,
      iconColor: "text-blue-400",
      title: "text-blue-800",
      text: "text-blue-700"
    }
  };

  const Icon = variants[variant].icon;

  return (
    <div className={cn(
      "rounded-md border p-4",
      variants[variant].container,
      className
    )}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={cn("h-5 w-5", variants[variant].iconColor)} />
        </div>
        <div className="ml-3">
          {title && (
            <h3 className={cn("text-sm font-medium", variants[variant].title)}>
              {title}
            </h3>
          )}
          <div className={cn("text-sm", variants[variant].text)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}