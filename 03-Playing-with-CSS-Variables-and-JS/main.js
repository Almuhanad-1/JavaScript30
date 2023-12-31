const inputs = document.querySelectorAll('.controls')

function handleChange() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('input', handleChange))