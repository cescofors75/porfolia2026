// Browser regression: open the home in agent-browser, then pipe this file
// into `agent-browser --session <session> eval --stdin`.
(async () => {
  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const waitFor = async (test, message) => {
    for (let attempt = 0; attempt < 100; attempt++) {
      if (test()) return;
      await pause(100);
    }
    throw new Error(message);
  };
  const navigate = async (path) => {
    const link = document.querySelector(`a[href="${path}"]`);
    if (!link) throw new Error(`Missing link ${path}`);
    link.click();
    await waitFor(() => location.pathname === path, `Navigation to ${path} failed`);
    await pause(400);
  };
  const checkVisible = () => waitFor(() => ![...document.querySelectorAll('.reveal-scroll')].some((el) =>
    el.getBoundingClientRect().top < innerHeight * 0.92 && getComputedStyle(el).opacity === '0'
  ), 'Blocks remain invisible after scroll settled');
  await waitFor(() => !document.querySelector('.preloader'), 'Preloader did not finish');
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
  await pause(900);
  await checkVisible();
  await navigate('/blog');
  await navigate('/');
  await waitFor(() => document.querySelectorAll('.reveal-scroll').length > 0, 'Home content missing');
  window.scrollTo({ top: 4500, behavior: 'instant' });
  await pause(900);
  await checkVisible();
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
  await pause(900);
  await checkVisible();
  const probe = document.createElement('div');
  probe.className = 'reveal-scroll';
  document.querySelector('main').append(probe);
  const newContentVisible = getComputedStyle(probe).opacity === '1';
  probe.remove();
  if (!newContentVisible) throw new Error('Untracked new content is hidden');
  return { passed: true, width: innerWidth, blocks: document.querySelectorAll('.reveal-scroll').length, routeRoundTrip: true, newContentVisible };
})()
