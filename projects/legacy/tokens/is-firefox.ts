import {inject} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 * Firefox browser engine detection
 */
export const TUI_IS_FIREFOX = tuiCreateTokenFromFactory(
    () =>
        (inject(WA_WINDOW) as Window & {mozCancelFullScreen: unknown})
            ?.mozCancelFullScreen !== undefined,
);
