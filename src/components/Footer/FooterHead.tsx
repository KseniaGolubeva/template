import FooterHeadLinks from "./FooterHeadLinks";

function FooterHead() {
  return (
    <section className="footer__head">
      <FooterHeadLinks title="Company" links={
        [{ link: '#', title: 'About Last.fm' },
        { link: '#', title: 'Contact Us' },
        { link: '#', title: 'Jobs' }]}
      />

      <FooterHeadLinks title="Help" links={
        [{ link: '#', title: 'Track My Music' },
        { link: '#', title: 'Community Support' },
        { link: '#', title: 'Community Guidelines' },
        { link: '#', title: 'Help' }]}
      />

      <FooterHeadLinks title="Goodies" links={
        [{ link: '#', title: 'Dowland Scrobbler' },
        { link: '#', title: 'Dowland API' },
        { link: '#', title: 'Free Music Downloads' },
        { link: '#', title: 'Merchandise' }]}
      />

      <FooterHeadLinks title="Account" links={
        [{ link: '#', title: 'Inbox' },
        { link: '#', title: 'Settings' },
        { link: '#', title: 'Last.fm Pro' },
        { link: '#', title: 'Logout' }]}
      />
    </section>
  );
}

export default FooterHead;
