namespace ToDo.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ToDoTable")]
    public partial class ToDoTable
    {
        [Key]
        public int TaskId { get; set; }

        [Required]
        [StringLength(50)]
        public string Task { get; set; }

        [Column(TypeName = "date")]
        public DateTime Date { get; set; }

        [Column(TypeName = "date")]
        public DateTime? EditDate { get; set; }

        public bool Complete { get; set; }

    

        public int UserId { get; set; }

      public virtual UserTable UserTable { get; set; }
    }
}
