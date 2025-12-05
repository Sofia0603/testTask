export default function DropdownModule() {


  document.querySelectorAll('[data-dropdown]').forEach(drop => {
    const toggle = drop.querySelector('[data-dropdown-toggle]');
    const list = drop.querySelector('[data-dropdown-list]');
    const input = drop.querySelector('input[type="hidden"]');
    const label = drop.querySelector('.order__dropdown__label');
    const icon = drop.querySelector('.order__dropdown__icon');

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      list.classList.toggle('open');
      icon.classList.toggle('open');
      toggle.classList.toggle('open');
    });

    list.querySelectorAll('.order__dropdown__item').forEach(item => {
      item.addEventListener('click', () => {
        label.textContent = item.textContent.trim();

        input.value = item.textContent.trim();

        list.querySelectorAll('.order__dropdown__item')
          .forEach(i => i.classList.remove('order__dropdown__item--active'));

        item.classList.add('order__dropdown__item--active');

        list.classList.remove('open');
        toggle.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!drop.contains(e.target)) {
        list.classList.remove('open');
        toggle.classList.remove('open');
        icon.classList.remove('open');
      }
    });

  });


}