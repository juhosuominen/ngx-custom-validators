import { Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
export const json = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    try {
        const obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) { }
    return { json: true };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWhvLnN1b21pbmVuL0dyYW5vL25neC1jdXN0b20tdmFsaWRhdG9ycy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvanNvbi92YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrRCxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBZ0IsQ0FBQyxPQUF3QixFQUFvQixFQUFFO0lBQzlFLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtRQUMzQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxDQUFDLEdBQVcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUVoQyxJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRztJQUNmLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzUHJlc2VudCB9IGZyb20gJy4uL3V0aWwvbGFuZyc7XG5cbmV4cG9ydCBjb25zdCBqc29uOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzID0+IHtcbiAgaWYgKGlzUHJlc2VudChWYWxpZGF0b3JzLnJlcXVpcmVkKGNvbnRyb2wpKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgdjogc3RyaW5nID0gY29udHJvbC52YWx1ZTtcblxuICB0cnkge1xuICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2Uodik7XG5cbiAgICBpZiAoQm9vbGVhbihvYmopICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuICByZXR1cm4geyBqc29uOiB0cnVlIH07XG59O1xuIl19