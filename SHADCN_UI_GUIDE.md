# shadcn UI 美化指南

本项目已成功集成 shadcn UI，为您的目录网站带来现代化、精美的界面设计。

## 🎨 已完成的美化

### 1. 核心配置
- ✅ 安装了 React 和 shadcn UI 依赖
- ✅ 配置了 shadcn UI 的颜色系统和主题变量
- ✅ 创建了工具函数 `cn()` 用于类名合并

### 2. UI 组件
已创建以下 shadcn UI 组件：
- **Button** - 按钮组件，支持多种变体和尺寸
- **Card** - 卡片组件，包含 Header、Content、Footer
- **Badge** - 徽章组件，用于标签和状态
- **Input** - 输入框组件
- **Separator** - 分隔线组件
- **Avatar** - 头像组件

### 3. 美化的页面组件
- **导航栏 (Navbar)** - 现代化设计，带有悬浮效果和毛玻璃背景
- **搜索框 (Search)** - 圆角设计，带有阴影和动画效果
- **目录卡片 (Directory Cards)** - 升级了悬停效果，添加了缩放和阴影动画
- **标签 (Tags)** - 使用 shadcn UI Badge 样式，支持图标表情
- **英雄区块 (Hero)** - 渐变背景，动画效果
- **页脚 (Footer)** - 现代化的渐变背景和交互效果

## 📦 组件位置

```
src/
├── components/
│   ├── ui/
│   │   └── shadcn/          # shadcn UI 组件
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── input.tsx
│   │       ├── separator.tsx
│   │       ├── avatar.tsx
│   │       ├── ButtonWrapper.astro
│   │       └── index.ts
│   ├── directory/
│   │   └── cards/
│   │       ├── ModernCard.tsx       # 新的现代化卡片组件
│   │       └── ModernCard.astro
│   └── hero/
│       └── ModernHero.astro         # 新的英雄区块组件
└── lib/
    └── utils.ts                     # cn() 工具函数
```

## 🎯 使用方法

### 在 React 组件中使用

```tsx
import { Button } from "@/components/ui/shadcn";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/shadcn";

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>标题</CardTitle>
      </CardHeader>
      <CardContent>
        <p>内容</p>
        <Button variant="default">点击我</Button>
      </CardContent>
    </Card>
  );
}
```

### 在 Astro 组件中使用

对于 Astro 组件，可以使用 ButtonWrapper：

```astro
---
import ButtonWrapper from "@/components/ui/shadcn/ButtonWrapper.astro";
---

<ButtonWrapper variant="default" size="lg">
  点击我
</ButtonWrapper>
```

### 使用新的 ModernHero

```astro
---
import ModernHero from "@/components/hero/ModernHero.astro";
---

<ModernHero>
  <span slot="badge">🎉 最新发布</span>
  <span slot="heading">发现最好的资源</span>
  <span slot="description">探索精心策划的资源集合</span>
  <div slot="actions">
    <a href="/submit" class="...">提交资源</a>
  </div>
</ModernHero>
```

## 🎨 颜色系统

项目使用 HSL 颜色系统，支持亮色和暗色主题：

```css
/* 亮色模式 */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 200.6 94.4% 50%;
--card: 0 0% 100%;
--muted: 210 40% 96.1%;

/* 暗色模式 */
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 200.6 94.4% 50%;
  --card: 222.2 84% 4.9%;
  --muted: 217.2 32.6% 17.5%;
}
```

使用这些颜色：

```html
<!-- 背景色 -->
<div class="bg-[hsl(var(--background))]">

<!-- 文字色 -->
<p class="text-[hsl(var(--foreground))]">

<!-- 主色调 -->
<button class="bg-[hsl(var(--primary))]">
```

## 🚀 进一步定制

### 修改颜色主题

编辑 `src/styles/global.css` 中的 CSS 变量：

```css
:root {
  --primary: 200.6 94.4% 50%;  /* 修改主色调 */
  --radius: 0.5rem;            /* 修改圆角大小 */
}
```

### 添加新的 shadcn UI 组件

1. 访问 [shadcn UI 文档](https://ui.shadcn.com/)
2. 复制所需组件的代码
3. 创建新文件在 `src/components/ui/shadcn/`
4. 调整颜色变量以使用项目的 HSL 系统
5. 在 `index.ts` 中导出新组件

## 🎭 动画和过渡

所有组件都包含流畅的过渡效果：

- **悬停缩放**: `hover:scale-105`
- **阴影变化**: `hover:shadow-xl`
- **颜色过渡**: `transition-colors duration-300`
- **完整过渡**: `transition-all duration-300`

## 📝 注意事项

1. **客户端渲染**: React 组件需要使用 `client:load` 或其他客户端指令
2. **路径别名**: 使用 `@/` 作为 `src/` 的别名
3. **响应式设计**: 所有组件都已优化为响应式
4. **暗色模式**: 完全支持暗色主题切换

## 🔧 故障排除

### 样式未生效
确保 `global.css` 已在布局文件中导入：

```astro
---
import '@/styles/global.css';
---
```

### TypeScript 错误
如果遇到路径问题，检查 `tsconfig.json`：

```json
{
  "compilerOptions": {
    "paths": {
      "@*": ["./src/*"]
    }
  }
}
```

## 📚 资源链接

- [shadcn UI 官方文档](https://ui.shadcn.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [Radix UI 文档](https://www.radix-ui.com/)
- [Astro 文档](https://docs.astro.build/)

---

✨ 享受您的美化后的目录网站！

