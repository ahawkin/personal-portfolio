import scroll from 'smoothscroll-polyfill';

const smoothScroll = (event, targetId) => {
  scroll.polyfill();

  const sectionId = targetId || `${event.currentTarget.id}-section`;
  const element = document.getElementById(sectionId.toLowerCase());

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};

export default smoothScroll;
