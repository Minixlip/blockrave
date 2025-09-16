import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export default function ShoppingCart() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-between items-center">
            <SidebarGroupLabel className="text-2xl text-black font-semibold">
              Your Cart{' '}
              <span className="text-sm font-normal text-blue-600 ml-1">
                (0)
              </span>
            </SidebarGroupLabel>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-black/50 hover:text-gray-700 focus:ring-0"
            >
              Clear Basket
            </Button>
          </div>
          <SidebarGroupContent className="h-[400px] overflow-y-auto border-t border-neutral-500/50 mt-4">
            <div className="flex h-[150px] my-4">
              <div className="flex-1 border border-neutral-500/50"></div>
              <div className="flex flex-col justify-between flex-1 ml-4">
                <span>Title of clothing</span>
                <span>Size & Color</span>
                <span>button to add quantity</span>
              </div>
              <div className="flex flex-col justify-between flex-1 ml-4">
                <span>$ price after discount</span>
                <span>price before discount</span>
                <span>Remove</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-neutral-500/50 mt-4">
        <span>0 items | $0.00</span>
        <span className="text-sm text-neutral-500">
          Shipping & taxes calculated at checkout
        </span>
        <Button
          variant="outline"
          className="w-full"
        >
          Checkout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
