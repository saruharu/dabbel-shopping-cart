import { MenuCategoryComponent } from "./menu-category/menu-category.component";
import { ShoppingCartDialogComponent } from "./shopping-cart-dialog/shopping-cart-dialog.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { TopbarComponent } from "./topbar/topbar.component";

export const conmponents = [
    MenuCategoryComponent,
    SidenavComponent,
    TopbarComponent,
    ShoppingCartDialogComponent
];

export const entryComponents = [
    ShoppingCartDialogComponent
]

export * from "./sidenav/sidenav.component";
export * from "./topbar/topbar.component";
export * from "./menu-category/menu-category.component";
export * from "./shopping-cart-dialog/shopping-cart-dialog.component";
