
import React from 'react';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';

interface DocumentUploaderProps {
  id: string;
  label: string;
  acceptTypes: string;
  note?: React.ReactNode;
}

const DocumentUploader: React.FC<DocumentUploaderProps> = ({ id, label, acceptTypes, note }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <div className="border-2 border-dashed border-input rounded-md p-6 text-center">
      <UploadCloud className="h-8 w-8 mx-auto text-muted-foreground" />
      <p className="mt-2 text-sm text-muted-foreground">Drag and drop your {id.split('-').join(' ')} here, or click to browse</p>
      <input type="file" className="hidden" accept={acceptTypes} id={id} required />
      <Button variant="outline" className="mt-4" onClick={() => document.getElementById(id)?.click()}>
        Select File
      </Button>
    </div>
    {note && <div className="mt-2 text-xs text-muted-foreground">{note}</div>}
  </div>
);

export const SupportingDocuments: React.FC = () => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-lg border">
      <h3 className="text-xl font-semibold mb-6">Supporting Documents</h3>
      
      <div className="space-y-6">
        <DocumentUploader 
          id="profile-photo"
          label="Profile Photo* (JPEG or PNG, max 2MB)"
          acceptTypes="image/jpeg,image/png"
        />
        
        <DocumentUploader 
          id="transcript"
          label="Academic Transcript* (PDF, max 5MB)"
          acceptTypes="application/pdf"
        />
        
        <DocumentUploader 
          id="nomination-form"
          label="Nomination Form* (PDF, max 5MB)"
          acceptTypes="application/pdf"
          note={<a href="#" className="text-jkusa-green hover:underline">Download the nomination form template</a>}
        />
      </div>
    </div>
  );
};
