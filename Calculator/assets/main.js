document.addEventListener('DOMContentLoaded', () => {
    let inp = document.querySelector('.inp');

    const calculate = () => {
        try {
            inp.value = eval(inp.value);
        } catch {
            inp.value = 'Error';
        }
    }

    const checkInp = (value) => {
        if(!value){}
        const validPattern = /^[0-9+\-*/.]+$/;
        const firstCharPattern = /^[a-zA-Z]/;

        if (firstCharPattern.test(value[0])) {
            inp.value = value.slice(1);
            return false;
        }

        if (validPattern.test(value)) {
            return true;
        } else {
            inp.value = inp.value.slice(0, -1);
            return false;
        }
    }

    const clearinp = () => {
        inp.value = '';
    }

    const appendValue = (val) => {
        inp.value += val;
        checkInp(inp.value);
    }

    window.calculate = calculate;
    window.clearinp = clearinp;
    window.appendValue = appendValue;

    inp.addEventListener('input', () => {
        checkInp(inp.value);
    });
});
