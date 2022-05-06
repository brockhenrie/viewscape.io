import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AUTHCOMPONENTS } from "./components/authComponents";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AUTHMATERIALS } from "./materials";

@NgModule({
  declarations: [
    ...AUTHCOMPONENTS
  ],
  imports: [
    CommonModule,
    ...AUTHMATERIALS,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  exports: [
  ],
})
export class AuthenticationModule {}
