import { Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
export const property = (value) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const properties = value.split(',');
        const obj = control.value;
        let isValid = true;
        for (const prop of properties) {
            if (obj[prop] == null) {
                isValid = false;
                break;
            }
        }
        return isValid ? null : { hasProperty: { value: value } };
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWhvLnN1b21pbmVuL0dyYW5vL25neC1jdXN0b20tdmFsaWRhdG9ycy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBa0QsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQWUsRUFBRTtJQUNyRCxPQUFPLENBQUMsT0FBd0IsRUFBb0IsRUFBRTtRQUVwRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsS0FBSyxNQUFNLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDN0IsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNyQixPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNoQixNQUFNO2FBQ1A7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzUHJlc2VudCB9IGZyb20gJy4uL3V0aWwvbGFuZyc7XG5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0eSA9ICh2YWx1ZTogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xuXG4gICAgaWYgKGlzUHJlc2VudChWYWxpZGF0b3JzLnJlcXVpcmVkKGNvbnRyb2wpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IHZhbHVlLnNwbGl0KCcsJyk7XG5cbiAgICBjb25zdCBvYmogPSBjb250cm9sLnZhbHVlO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKG9ialtwcm9wXSA9PSBudWxsKSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IHsgaGFzUHJvcGVydHk6IHsgdmFsdWU6IHZhbHVlIH0gfTtcbiAgfTtcbn07XG4iXX0=