import { Shield } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

const ComplianceNotice = () => {
  const { t } = useTranslations();

  return (
    <div className="bg-primary/5 border-l-4 border-primary py-3 px-4">
      <div className="flex items-center space-x-3">
        <Shield className="h-5 w-5 text-primary flex-shrink-0" />
        <p className="text-sm text-foreground/85 font-medium">
          {t.compliance.title}
        </p>
      </div>
    </div>
  );
};

export default ComplianceNotice;