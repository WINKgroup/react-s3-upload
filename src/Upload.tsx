import * as React from "react";
import SubmitTrigger from './SubmitTrigger'
import FileSelector from "./FileSelector";

export default function Upload() {
    const [uploading, setUploading] = React.useState(false)
    const [files, setFiles] = React.useState([] as File[])

    function onSubmit() {
        setUploading(true)
    }

    function onSelectionChange(files:File[]) {
        setFiles(files)
    }

    return uploading ? (
        <p>ciao</p>
    ) : (
        <>
            <FileSelector
                onSelectionChange={ onSelectionChange }
            />
            <SubmitTrigger
                onSubmit={ onSubmit }
                files={ files }
            />
        </>
    )
}
