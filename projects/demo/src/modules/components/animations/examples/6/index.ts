import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {TuiButton, tuiDropdownAnimation} from '@taiga-ui/core';

import {AnimationState} from '../../state';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgIf, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiDropdownAnimation],
})
export default class Example {
    protected speed = inject(AnimationState);

    protected isOpen = false;

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
