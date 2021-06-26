export default {
    name: 'Facebook',
    icon: '',
    addElement: () => {
        const el = document.getElementById('');
        const label = document.createElement('div');
        label.className = 'timed-label-facebook';
        label.innerHTML = '00:00:00'
        el.insertBefore(label, el.firstChild);
        return label;       
    }
}