import { Button } from "@/components/ui/shadcn/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { Input } from "@/components/ui/shadcn/input";
import { Separator } from "@/components/ui/shadcn/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar";

export default function ComponentShowcase() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
          shadcn UI 组件展示
        </h1>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          所有可用的 shadcn UI 组件预览
        </p>
      </div>

      <Separator />

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">按钮 (Buttons)</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">默认按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="outline">轮廓按钮</Button>
          <Button variant="ghost">幽灵按钮</Button>
          <Button variant="destructive">危险按钮</Button>
          <Button variant="link">链接按钮</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">小号</Button>
          <Button size="default">默认</Button>
          <Button size="lg">大号</Button>
        </div>
      </section>

      <Separator />

      {/* Cards Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">卡片 (Cards)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>基础卡片</CardTitle>
              <CardDescription>这是卡片描述</CardDescription>
            </CardHeader>
            <CardContent>
              <p>卡片内容区域</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">操作</Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle>悬停效果</CardTitle>
              <CardDescription>鼠标悬停查看效果</CardDescription>
            </CardHeader>
            <CardContent>
              <p>这个卡片有悬停动画</p>
            </CardContent>
          </Card>

          <Card className="border-[hsl(var(--primary))] border-2">
            <CardHeader>
              <CardTitle>主题色边框</CardTitle>
              <CardDescription>使用主题色的卡片</CardDescription>
            </CardHeader>
            <CardContent>
              <p>突出显示的卡片</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Badges Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">徽章 (Badges)</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default">默认徽章</Badge>
          <Badge variant="secondary">次要徽章</Badge>
          <Badge variant="outline">轮廓徽章</Badge>
          <Badge variant="destructive">危险徽章</Badge>
        </div>
        <div className="flex flex-wrap gap-4">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">渐变徽章</Badge>
          <Badge className="bg-gradient-to-r from-green-500 to-blue-500">🎉 图标徽章</Badge>
          <Badge className="text-lg px-4 py-2">大号徽章</Badge>
        </div>
      </section>

      <Separator />

      {/* Input Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">输入框 (Input)</h2>
        <div className="max-w-md space-y-4">
          <Input placeholder="默认输入框" />
          <Input type="email" placeholder="电子邮件" />
          <Input type="password" placeholder="密码" />
          <Input disabled placeholder="禁用状态" />
        </div>
      </section>

      <Separator />

      {/* Avatar Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">头像 (Avatar)</h2>
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-2xl">XY</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <Separator />

      {/* Combined Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">组合示例</h2>
        <Card className="max-w-2xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>用户</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>用户资料</CardTitle>
                  <CardDescription>完善您的个人信息</CardDescription>
                </div>
              </div>
              <Badge variant="secondary">已验证</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">用户名</label>
              <Input placeholder="输入用户名" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">电子邮件</label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            <div className="flex gap-2">
              <Badge>开发者</Badge>
              <Badge>设计师</Badge>
              <Badge variant="outline">爱好者</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">取消</Button>
            <Button>保存更改</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}

