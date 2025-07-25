import { Shield, Lock, CheckCircle, Eye, Clock, Award, Globe, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from '@/hooks/useTranslations';

interface SecurityBadgeProps {
  variant?: 'full' | 'compact' | 'minimal';
  className?: string;
}

const SecurityBadge = ({ variant = 'full', className = '' }: SecurityBadgeProps) => {
  const { t } = useTranslations();
  const currentDate = new Date().toLocaleDateString('de-DE', { 
    month: 'long', 
    year: 'numeric' 
  });

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <Shield className="h-4 w-4 text-accent animate-pulse" />
        <span className="text-xs font-medium text-muted-foreground">
          {t.security.minimal}
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-primary/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-4 ${className}`}>
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-accent/20 rounded-xl flex items-center justify-center">
            <Shield className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm text-foreground">{t.security.compact.title}</h4>
            <p className="text-xs text-muted-foreground">{t.security.compact.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
            <CheckCircle className="h-3 w-3 mr-1" />
            {t.security.compact.ssl}
          </Badge>
          <span className="text-muted-foreground">{t.security.compact.verified} {currentDate}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-card border border-accent/20 rounded-3xl p-6 shadow-card ${className}`}>
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-card">
          <Shield className="h-6 w-6 text-accent-foreground animate-pulse" />
        </div>
        <div>
          <h3 className="font-playfair font-bold text-xl text-primary">{t.security.full.title}</h3>
          <p className="text-sm text-muted-foreground">{t.security.full.subtitle}</p>
        </div>
      </div>

      {/* Security features */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { icon: Lock, label: t.security.full.features.ssl.label, status: t.security.full.features.ssl.status },
          { icon: Eye, label: t.security.full.features.monitoring.label, status: t.security.full.features.monitoring.status },
          { icon: CheckCircle, label: t.security.full.features.gdpr.label, status: t.security.full.features.gdpr.status },
          { icon: Award, label: t.security.full.features.legal.label, status: t.security.full.features.legal.status }
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <item.icon className="h-4 w-4 text-accent flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-medium text-foreground truncate">{item.label}</p>
              <p className="text-xs text-accent">{item.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">{t.security.full.status.title}</span>
          </div>
          <span className="text-sm text-accent font-bold">{currentDate}</span>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          {t.security.full.status.info}
        </div>
      </div>

      {/* Legal notice */}
      <div className="mt-4 p-3 bg-destructive/5 border border-destructive/20 rounded-xl">
        <p className="text-xs text-destructive-foreground leading-relaxed">
          <strong>{t.security.full.notice.title}</strong> {t.security.full.notice.description}
        </p>
      </div>
    </div>
  );
};

export default SecurityBadge;