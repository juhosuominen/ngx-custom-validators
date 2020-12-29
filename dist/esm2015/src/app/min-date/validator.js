import { FormControl, NgModel, Validators } from '@angular/forms';
import { isDate, isPresent, parseDate } from '../util/lang';
export const minDate = (minInput) => {
    let value;
    let subscribe = false;
    let minValue = minInput;
    const isForm = minInput instanceof FormControl || minInput instanceof NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (isForm) {
            minValue = minInput.value;
        }
        value = parseDate(minValue);
        if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            }
            else if (isForm) {
                return { minDate: { error: 'minDate is invalid' } };
            }
            else {
                throw Error('minDate value must be or return a formatted date');
            }
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d >= new Date(value).getTime() ? null : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWhvLnN1b21pbmVuL0dyYW5vL25neC1jdXN0b20tdmFsaWRhdG9ycy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluLWRhdGUvdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUIsV0FBVyxFQUFFLE9BQU8sRUFBaUMsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEgsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTVELE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLFFBQWEsRUFBZSxFQUFFO0lBQ3BELElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN4QixNQUFNLE1BQU0sR0FBRyxRQUFRLFlBQVksV0FBVyxJQUFJLFFBQVEsWUFBWSxPQUFPLENBQUM7SUFDOUUsT0FBTyxDQUFDLE9BQXdCLEVBQW9CLEVBQUU7UUFFcEQsSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNLEVBQUU7WUFDeEIsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNqQixRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksUUFBUSxDQUFDLEVBQUU7WUFDbEQsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNqQixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNLElBQUksTUFBTSxFQUFFO2dCQUNqQixPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLEVBQUUsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxNQUFNLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0Y7UUFFRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV2RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtZQUM3QixLQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7U0FDakI7UUFFRCxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0ssQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCwgTmdNb2RlbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc0RhdGUsIGlzUHJlc2VudCwgcGFyc2VEYXRlIH0gZnJvbSAnLi4vdXRpbC9sYW5nJztcblxuZXhwb3J0IGNvbnN0IG1pbkRhdGUgPSAobWluSW5wdXQ6IGFueSk6IFZhbGlkYXRvckZuID0+IHtcbiAgbGV0IHZhbHVlO1xuICBsZXQgc3Vic2NyaWJlID0gZmFsc2U7XG4gIGxldCBtaW5WYWx1ZSA9IG1pbklucHV0O1xuICBjb25zdCBpc0Zvcm0gPSBtaW5JbnB1dCBpbnN0YW5jZW9mIEZvcm1Db250cm9sIHx8IG1pbklucHV0IGluc3RhbmNlb2YgTmdNb2RlbDtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzID0+IHtcblxuICAgIGlmICghc3Vic2NyaWJlICYmIGlzRm9ybSkge1xuICAgICAgc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgIG1pbklucHV0LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpc0Zvcm0pIHtcbiAgICAgIG1pblZhbHVlID0gbWluSW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBwYXJzZURhdGUobWluVmFsdWUpO1xuXG4gICAgaWYgKCFpc0RhdGUodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChpc0Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIHsgbWluRGF0ZTogeyBlcnJvcjogJ21pbkRhdGUgaXMgaW52YWxpZCcgfSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ21pbkRhdGUgdmFsdWUgbXVzdCBiZSBvciByZXR1cm4gYSBmb3JtYXR0ZWQgZGF0ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1ByZXNlbnQoVmFsaWRhdG9ycy5yZXF1aXJlZChjb250cm9sKSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShwYXJzZURhdGUoY29udHJvbC52YWx1ZSkpLmdldFRpbWUoKTtcblxuICAgIGlmICghaXNEYXRlKGQpKSB7XG4gICAgICByZXR1cm4geyB2YWx1ZTogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgdmFsdWUgPSB2YWx1ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBkID49IG5ldyBEYXRlKHZhbHVlKS5nZXRUaW1lKCkgPyBudWxsIDogKGlzRm9ybSA/IHsgbWluRGF0ZTogeyBjb250cm9sOiBtaW5JbnB1dCwgdmFsdWU6IG1pbklucHV0LnZhbHVlIH0gfSA6IHsgbWluRGF0ZTogeyB2YWx1ZTogbWluVmFsdWUsIGNvbnRyb2w6IHVuZGVmaW5lZCB9IH0pO1xuICB9O1xufTtcbiJdfQ==