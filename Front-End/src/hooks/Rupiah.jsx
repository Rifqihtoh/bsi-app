let rupiah = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });
  
  export default toRupiah = (val) => {
    return rupiah.format(val);
  };
  
