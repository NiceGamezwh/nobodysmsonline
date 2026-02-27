"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  CreditCard,
  Users,
  RefreshCw,
  HelpCircle,
  AlertTriangle,
  BookOpen,
  Headphones,
  Activity,
  Star,
} from "lucide-react"
import Image from "next/image"

export default function HelpPage() {
  return (
    <div className="space-y-6">
      {/* Header with banner */}
      <div className="relative rounded-xl overflow-hidden h-32 md:h-40">
        <Image
          src="/images/banner.gif"
          alt="Nobody SMS"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
          <div className="px-6">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">帮助中心</h1>
            <p className="text-muted-foreground">使用指南与常见问题</p>
          </div>
        </div>
      </div>

      {/* Usage Guide */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            使用指南
          </CardTitle>
          <CardDescription>如何正确使用短信验证码服务</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <h4 className="font-medium text-primary mb-2">如何确定项目名称？</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              项目名称需与短信签名一致。例如收到短信：
              <span className="text-foreground">【闲鱼】967347（验证码仅用于您本人短信登录）</span>， 那么项目名称就是「
              <span className="text-primary font-medium">闲鱼</span>」，即短信中【】内的内容。
            </p>
            <p className="text-sm text-muted-foreground mt-2">提供给客服项目名称，即可获取对应的项目ID来使用。</p>
          </div>

          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <AlertTriangle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">超时处理</p>
                <p className="text-sm text-muted-foreground">如果超过3分钟未收到验证码，建议拉黑该号码重新取号</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <RefreshCw className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">释放与拉黑的区别</p>
                <p className="text-sm text-muted-foreground">
                  释放号码后下次还可能分配到该号码，拉黑则该号码不会再分配给你
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            价格说明
          </CardTitle>
          <CardDescription>短信验证码收费标准</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-border bg-muted/20">
              <div className="text-sm text-muted-foreground mb-1">普通号码</div>
              <div className="text-2xl font-bold text-primary">
                ¥0.36<span className="text-sm font-normal text-muted-foreground">/条</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">适用于大部分项目</p>
            </div>
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="text-sm text-muted-foreground mb-1">专属对接</div>
              <div className="text-2xl font-bold text-primary">联系客服</div>
              <p className="text-xs text-muted-foreground mt-2">普通号码不可用时，可联系客服进行专属对接，价格略高</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recharge */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            充值说明
          </CardTitle>
          <CardDescription>如何为账户充值</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground font-medium">
                1
              </span>
              <div>
                <p className="font-medium">最低充值金额</p>
                <p className="text-sm text-muted-foreground">
                  最低充值 <span className="text-primary font-medium">15元</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground font-medium">
                2
              </span>
              <div>
                <p className="font-medium">充值方式</p>
                <p className="text-sm text-muted-foreground">请联系客服进行充值</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Permanent Membership */}
      <Card className="bg-card/50 border-border/50 border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            永久会员
          </CardTitle>
          <CardDescription>一次付费，终身有效，无需续费</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Price highlight */}
          <div className="p-5 rounded-lg border-2 border-primary bg-primary/10 text-center mb-5">
            <div className="text-sm text-muted-foreground mb-1">永久会员价格</div>
            <div className="text-4xl font-bold text-primary">¥99</div>
            <div className="text-sm text-muted-foreground mt-1">一次性付费</div>
          </div>

          {/* Discount info */}
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mb-5">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-muted-foreground line-through">¥0.36/条</span>
              <span className="text-primary font-bold text-lg">¥0.216/条 (6折)</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">充值享永久6折优惠</p>
            <p className="text-xs text-muted-foreground text-center mt-1">一次购买，终身有效</p>
          </div>

          {/* CTA Button */}
          <a
            href="https://ur.alipay.com/_6zXEVOzmKeWhLv9Z8QRKRU"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-5 flex items-center justify-center gap-2 p-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            立即开通永久会员
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>

          {/* Benefits */}
          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 shrink-0">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">邀请返利</p>
                <p className="text-xs text-muted-foreground">下级消费5%返还</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 shrink-0">
                <CreditCard className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">邀请奖励</p>
                <p className="text-xs text-muted-foreground">双方各得¥3</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 shrink-0">
                <Headphones className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">优先客服响应</p>
                <p className="text-xs text-muted-foreground">会员专享优先处理</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 shrink-0">
                <Activity className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">新功能优先体验</p>
                <p className="text-xs text-muted-foreground">抢先使用最新功能</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 shrink-0">
                <Star className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">专属定制服务</p>
                <p className="text-xs text-muted-foreground">享受会员专属定制</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referral Program */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            邀请返利
          </CardTitle>
          <CardDescription>推荐好友赚取佣金</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              邀请好友使用我们的服务，下属账号消费的 <span className="text-primary font-bold text-lg">5%</span>{" "}
              将自动返还到您的账户余额。
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-primary" />
            联系我们
          </CardTitle>
          <CardDescription>如有问题请随时联系我们</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 mb-4">
            <Image
              src="/images/logo.jpg"
              alt="Nobody SMS"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div>
              <p className="font-medium text-primary">Nobody SMS 客服</p>
              <p className="text-sm text-muted-foreground">充值、开户、专属对接、问题咨询</p>
              <p className="text-xs text-muted-foreground mt-1">工作时间：9:00 - 18:00</p>
            </div>
          </div>
          
          <div className="grid gap-3">
            <a 
              href="https://nobodysms.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium">官方网站</p>
                <p className="text-sm text-muted-foreground">nobodysms.xyz</p>
              </div>
            </a>
            
            <a 
              href="https://qm.qq.com/q/oqPmRqD9eM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.003 2c-5.523 0-10 4.477-10 10 0 2.136.67 4.116 1.81 5.74L2 22l4.453-1.67A9.96 9.96 0 0012.003 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18a8 8 0 01-4.19-1.18l-.3-.18-3.12 1.17 1.07-3.21-.2-.32A7.96 7.96 0 014.003 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium">管理员 QQ</p>
                <p className="text-sm text-muted-foreground">点击添加管理员</p>
              </div>
            </a>
            
            <a 
              href="https://qm.qq.com/q/olY9eOkg26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">用户 3 群</p>
                <p className="text-sm text-muted-foreground">Nobody SMS 3群</p>
              </div>
            </a>
            
            <a 
              href="https://www.yuque.com/nobodysms/xlypsu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-primary">使用手册</p>
                <p className="text-sm text-muted-foreground">NobodySMS 完整使用指南</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
