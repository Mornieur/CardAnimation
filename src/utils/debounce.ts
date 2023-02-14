export default function debounce(f: (args: any) => any, timeout = 400){
  let timer: NodeJS.Timeout;
  return (args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => f(args), timeout);
  };
}