using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class updatedwithbillingnewdesigncontroller : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BillingNewDesignTable",
                columns: table => new
                {
                    BillingNewId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CardName = table.Column<string>(nullable: true),
                    CardNo = table.Column<string>(nullable: true),
                    ExpMonth = table.Column<int>(nullable: false),
                    ExpYear = table.Column<int>(nullable: false),
                    Cvv = table.Column<string>(nullable: true),
                    BillDate = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    TotalPrice = table.Column<int>(nullable: false),
                    Newdesigncode = table.Column<string>(nullable: true),
                    PayInfo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BillingNewDesignTable", x => x.BillingNewId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BillingNewDesignTable");
        }
    }
}
