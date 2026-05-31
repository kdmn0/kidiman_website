import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { Mail } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  const contacts = [
    {
      title: t('contact.email'),
      value: "yigitardakidiman@gmail.com",
      href: "mailto:yigitardakidiman@gmail.com",
      icon: <Mail size={32} />
    },
    {
      title: t('contact.linkedin'),
      value: "linkedin.com/in/yigitardakidiman",
      href: "https://www.linkedin.com/in/yigitardakidiman/",
      icon: <FaLinkedin size={32} />
    },
    {
      title: t('contact.instagram'),
      value: "@codewithkidiman",
      href: "https://www.instagram.com/codewithkidiman/",
      icon: <FaInstagram size={32} />
    }
  ];

  return (
    <motion.div
      variants={container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}

      className="space-y-12 py-8 max-w-4xl mx-auto"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black">{t('contact.heading')}</h1>
        <p className="text-xl text-textMuted-light dark:text-textMuted-dark">{t('contact.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <motion.div key={index} variants={item}>
            <a href={contact.href} target="_blank" rel="noreferrer" className="card-base flex flex-col items-center text-center gap-4 group bg-transparent">
              <div className="p-4 bg-secondary-light dark:bg-secondary-dark rounded-full text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                {contact.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{contact.title}</h3>
                <p className="text-textMuted-light dark:text-textMuted-dark break-all">{contact.value}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
