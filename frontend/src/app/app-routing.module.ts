import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PurchaseMadeComponent } from './components/purchase-made/purchase-made.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'livros', component: BooksComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: RegisterComponent},
  {path: 'carrinho', component: CartComponent},
  {path: 'livros/livro', component: ItemDetailComponent},
  {path: 'pagamento', component: PaymentComponent},
  {path: 'pagamento/compra-realizada', component: PurchaseMadeComponent},
  {path: 'conta', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
