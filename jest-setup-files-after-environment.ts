import '@testing-library/jest-dom'

// Not available in jsdom so must be mocked
window.HTMLElement.prototype.scrollTo = jest.fn
