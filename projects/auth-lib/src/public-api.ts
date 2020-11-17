/*
 * Public API Surface of auth-lib
 */


export * from './lib/auth-lib.service';
export * from './lib/auth-lib.component';
export * from './lib/auth-lib.module';

let _data: string = '';

export function setData(data: string): void {
    _data = data;
}

export function getData(): string {
    return _data;
}