import React from 'react';
import { PdfIcon } from '../../../../assets/images';

interface DocumentLinkProps {
  label: string;
  href: string;
}

const DocumentLink: React.FC<DocumentLinkProps> = ({ label, href }) => (
  <a href={href} className="flex items-center space-x-2 text-sm text-brand-text-dark hover:text-brand-gold transition-colors">
    <img src={PdfIcon} className="h-5 w-5 text-red-500" />
    <span>{label}</span>
  </a>
);

export default DocumentLink;