'use client';

import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps {
  /**
   * ボタンの子要素
   */
  children: React.ReactNode;
  /**
   * ボタンのバリアント
   */
  variant?: Variant;
  /**
   * ボタンのサイズ
   */
  size?: Size;
  /**
   * ボタンのクリックハンドラ
   */
  onClick?: () => void;
  /**
   * ボタンのクラス名
   */
  className?: string;
}

export default function Button({
  children,
  variant = 'primary' as Variant,
  size = 'medium' as Size,
  onClick,
  className = '',
}: ButtonProps) {
  // ベーススタイル
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer';

  // バリアントスタイル
  const variantStyles: Record<Variant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };

  // サイズスタイル
  const sizeStyles: Record<Size, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // 結合されたクラス名
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
