import { NgModule } from '@angular/core';

import { CustomUserManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [CustomUserManagementSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [CustomUserManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CustomUserManagementSharedCommonModule {}
