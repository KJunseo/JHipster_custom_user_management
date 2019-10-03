import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomUserManagementSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CustomUserManagementSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CustomUserManagementSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomUserManagementSharedModule {
  static forRoot() {
    return {
      ngModule: CustomUserManagementSharedModule
    };
  }
}
