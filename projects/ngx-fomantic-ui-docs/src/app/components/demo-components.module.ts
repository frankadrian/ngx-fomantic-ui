import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuiCollapseModule, FuiPopupModule } from '../../../../ngx-fomantic-ui/src/public-api';

import { ApiComponent } from './api/api.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { ExampleComponent } from './example/example.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageContentComponent } from './page-content/page-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GithubButtonsComponent } from './github-buttons/github-buttons.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        FuiCollapseModule,
        FuiPopupModule
    ],
    declarations: [
        SidebarComponent,
        ApiComponent,
        CodeblockComponent,
        ExampleComponent,
        PageTitleComponent,
        GithubButtonsComponent,
        PageContentComponent
    ],
    exports: [
        SidebarComponent,
        ApiComponent,
        CodeblockComponent,
        ExampleComponent,
        PageTitleComponent,
        GithubButtonsComponent,
        PageContentComponent
    ]
})
export class DemoComponentsModule {}
