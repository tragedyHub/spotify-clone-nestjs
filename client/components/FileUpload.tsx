import * as React from "react";
import { useRef } from "react";

interface FileUplaodProps {
  setFile: Function;
  accept: string;
}

const FileUpload: React.FC<FileUplaodProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
    }

  return (
    <div onClick={() => ref.current.click()}>
      <input
        type="file"
        accept={accept}
        style={{display: "none"}}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
