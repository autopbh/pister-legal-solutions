import { useState } from 'react';
import { ChevronDown, Users, MessageSquare, HelpCircle, Settings, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/useLanguage';
import ProcessSection from '@/components/sections/ProcessSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ExpandedMenu = () => {
  const { t } = useLanguage();
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const menuItems = [
    {
      id: 'process',
      icon: Settings,
      label: 'Notre Processus',
      component: ProcessSection
    },
    {
      id: 'team',
      icon: Users,
      label: 'Notre Équipe',
      component: TeamSection
    },
    {
      id: 'testimonials',
      icon: MessageSquare,
      label: 'Témoignages',
      component: TestimonialsSection
    },
    {
      id: 'faq',
      icon: HelpCircle,
      label: 'FAQ',
      component: FAQSection
    }
  ];

  const openDialog = (id: string) => {
    setActiveDialog(id);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border/50 backdrop-blur-sm bg-background/80"
          >
            <FileText className="h-4 w-4 mr-2" />
            <span className="mr-1 font-medium">Plus d'infos</span>
            <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-56 bg-background/95 backdrop-blur-xl border border-border shadow-card animate-scale-in"
          sideOffset={8}
        >
          {menuItems.map((item) => (
            <DropdownMenuItem
              key={item.id}
              onClick={() => openDialog(item.id)}
              className="cursor-pointer transition-all duration-200 hover:bg-primary/10 hover:text-primary flex items-center gap-3 p-3"
            >
              <item.icon className="h-4 w-4" />
              <span className="font-medium">{item.label}</span>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-xs text-muted-foreground justify-center">
            Informations détaillées
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dialogs pour chaque section */}
      {menuItems.map((item) => {
        const Component = item.component;
        return (
          <Dialog 
            key={item.id} 
            open={activeDialog === item.id} 
            onOpenChange={(open) => !open && closeDialog()}
          >
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <Component />
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </>
  );
};

export default ExpandedMenu;