export default function DownloadButton({
  title,
  Icon,
  description,
  iconSize,
}: any) {
  return (
    <button className="flex w-[100%] lg:w-[max-content] items-start gap-3 rounded-lg bg-foreground px-5 lg:px-6 py-[12px]">
      <Icon size={iconSize} />
      <div className="flex  items-start gap-[2px] flex-col leading-3">
        <p className="text-[9px] opacity-60">{description}</p>
        <p className="text-[14px]">{title}</p>
      </div>
    </button>
  );
}
