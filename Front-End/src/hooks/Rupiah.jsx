let rupiah = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });
  
  export default toRupiah = (val) => {
    if (val == null) return 0;
    if (typeof val === "string") return rupiah.format(parseInt(val));
    if (typeof val === "number")
    return rupiah.format(val);
  };
  
