const DownloadFiles = (props: { fileName: string; buttonTitle: string }) => {
  const { buttonTitle, fileName } = props;

  const onButtonClick = (fileName: string) => {
    fetch(fileName).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
      });
    });
  };
  return (
    <button
      onClick={() => onButtonClick(fileName)}
      className="transition w-3/4 text-white ease-in-out delay-150 bg-yellow hover:bg-darkYellow py-3 px-6 rounded"
    >
      {buttonTitle}
    </button>
  );
};

export default DownloadFiles;
