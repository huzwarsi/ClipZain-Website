'use client';

interface ToastProps {
  show: boolean;
  onClose: () => void;
}

export default function Toast({ show, onClose }: ToastProps) {
  return (
    <div className={`toast ${show ? 'show' : ''}`} id="toast">
      <button className="close-toast" onClick={onClose}>
        &times;
      </button>
      <h4>
        <i className="fas fa-check-circle" style={{ color: '#00C6FF' }}></i> Message Sent!
      </h4>
      <p>Thank you! We&apos;ll get back to you within 24 hours.</p>
    </div>
  );
}
