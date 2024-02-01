import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  TuiAvatarModule,
  TuiBadgedContentModule,
  TuiBadgeModule,
  TuiBreadcrumbsModule,
  TuiCarouselModule,
  TuiCheckboxModule,
  TuiElasticContainerModule,
  TuiFilterModule,
  TuiInputModule,
  TuiIslandModule,
  TuiMultiSelectModule,
  TuiProgressModule,
  TuiSelectModule,
  TuiStepperModule,
  TuiTabsModule,
  TuiTagModule,
  TuiToggleModule
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiDropdownModule,
  TuiErrorModule,
  TuiExpandModule,
  TuiLoaderModule,
  TuiNotificationModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTooltipModule
} from '@taiga-ui/core';
import {TuiBlockStatusModule} from "@taiga-ui/layout";

const TaigaModules = [TuiTabsModule,
  TuiSvgModule,
  TuiInputModule,
  TuiAvatarModule,
  TuiBadgeModule,
  TuiBadgedContentModule,
  TuiLoaderModule,
  TuiCarouselModule,
  TuiIslandModule, TuiCheckboxModule, TuiDialogModule, TuiDropdownModule, TuiElasticContainerModule, TuiToggleModule, TuiErrorModule, TuiExpandModule, TuiFilterModule, TuiMultiSelectModule, TuiSelectModule, TuiTooltipModule, TuiNotificationModule, TuiProgressModule, TuiScrollbarModule, TuiTagModule, TuiBlockStatusModule, TuiButtonModule, TuiTabsModule, TuiBreadcrumbsModule, TuiStepperModule];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...TaigaModules,
  ],
  exports: [
    ...TaigaModules,
  ],
})

export class TaigaModule {
}
