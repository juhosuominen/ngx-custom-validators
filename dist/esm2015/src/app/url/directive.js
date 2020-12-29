import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { url } from './validator';
const URL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
export class UrlValidator {
    validate(c) {
        return url(c);
    }
}
UrlValidator.decorators = [
    { type: Directive, args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWhvLnN1b21pbmVuL0dyYW5vL25neC1jdXN0b20tdmFsaWRhdG9ycy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvdXJsL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbEMsTUFBTSxhQUFhLEdBQVE7SUFDekIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUYsTUFBTSxPQUFPLFlBQVk7SUFDdkIsUUFBUSxDQUFDLENBQWtCO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7OztZQVBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMERBQTBEO2dCQUNwRSxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyB1cmwgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IFVSTF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVXJsVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1cmxdW2Zvcm1Db250cm9sTmFtZV0sW3VybF1bZm9ybUNvbnRyb2xdLFt1cmxdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbVVJMX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgVXJsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB1cmwoYyk7XG4gIH1cbn1cbiJdfQ==