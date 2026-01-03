"use client";

import css from "./Modal.module.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) return null;

    return (
        <div className={css.overlay} onClick={onClose}>
            <div
                className={css.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={css.close} onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}
