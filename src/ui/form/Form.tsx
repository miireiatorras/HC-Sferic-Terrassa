// import {
//     registerBlockName,
//     BaseComponentProps,
//     getBaseComponentProps,
// } from '@/utils';

// export type FormProps = BaseComponentProps & {
//     formData: {
//         nom: string;
//         telefon: string;
//         email: string;
//         consulta: string;
//     };
//     onChange: (
//         event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => void;
//     // onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
//     children?: React.ReactNode;
// };

// const block = registerBlockName('Form');

// export const Form = ({ formData, onChange, children, ...props }: FormProps) => {
//     return (
//         <div {...getBaseComponentProps({ ...props, block })}>
//             {children}
//             <form className="contact-form">
//                 <div className="form-group">
//                     <div className="nom">
//                         <label>Nom i Cognoms</label>
//                         <input
//                             type="text"
//                             name="nom"
//                             value={formData.nom}
//                             onChange={onChange}
//                         />
//                     </div>
//                     <div className="telf">
//                         <label>Telèfon</label>
//                         <input
//                             type="tel"
//                             name="telefon"
//                             value={formData.telefon}
//                             onChange={onChange}
//                         />
//                     </div>
//                 </div>
//                 <label>Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={onChange}
//                 />
//                 <label>Consulta</label>
//                 <textarea
//                     name="consulta"
//                     value={formData.consulta}
//                     onChange={onChange}
//                 />
//                 <button type="submit">Enviar</button>
//             </form>
//         </div>
//     );
// };
