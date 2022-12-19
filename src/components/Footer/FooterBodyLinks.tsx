import TimeZone from "./TimeZone";
import LanguageLinks from "./LanguageLinks";
import LegalLinks from "./LegalLinks";

function FooterBodyLinks() {
  return (
    <div className="footer__body-links">
      <LanguageLinks languageLinks={
        [
          { link: '#', title: 'English' },
          { link: '#', title: 'Deutsch' },
          { link: '#', title: 'Español' },
          { link: '#', title: 'Français' },
          { link: '#', title: 'Italiano' },
          { link: '#', title: '日本語' },
          { link: '#', title: 'Polski' },
          { link: '#', title: 'Português' },
          { link: '#', title: 'Русский' },
          { link: '#', title: 'Svenska' },
          { link: '#', title: 'Türkçe' },
          { link: '#', title: '简体中文' },
        ]
      } />

      <TimeZone />

      <LegalLinks
        copyright={{ copyright: '2022 Last.fm Ltd. All rights reserved', link: '#', title: 'CBS Interactive' }}
        legalLinks={
          [
            { link: '#', title: 'Terms of Use' },
            { link: '#', title: 'Privacy Policy' },
            { link: '#', title: 'Legal Policies' },
            { link: '#', title: 'Cookies Policy' },
            { link: '#', title: 'Cookie Information' },
            { link: '#', title: 'Jobs at ViacomCBS' },
            { link: '#', title: 'Last.fm Music' }
          ]
        } />
    </div>
  );
}

export default FooterBodyLinks;
