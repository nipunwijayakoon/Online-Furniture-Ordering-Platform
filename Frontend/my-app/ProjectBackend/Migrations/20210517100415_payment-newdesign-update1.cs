using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class paymentnewdesignupdate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BillingNewInfoTable");

            migrationBuilder.AddColumn<string>(
                name: "Address1",
                table: "BillingInfoTable",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Address2",
                table: "BillingInfoTable",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "BillingInfoTable",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Designcode",
                table: "BillingInfoTable",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address1",
                table: "BillingInfoTable");

            migrationBuilder.DropColumn(
                name: "Address2",
                table: "BillingInfoTable");

            migrationBuilder.DropColumn(
                name: "City",
                table: "BillingInfoTable");

            migrationBuilder.DropColumn(
                name: "Designcode",
                table: "BillingInfoTable");

            migrationBuilder.CreateTable(
                name: "BillingNewInfoTable",
                columns: table => new
                {
                    BillingNewId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BillDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CardName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CardNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cvv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Design_Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExpMonth = table.Column<int>(type: "int", nullable: false),
                    ExpYear = table.Column<int>(type: "int", nullable: false),
                    PayInfo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TotalPrice = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BillingNewInfoTable", x => x.BillingNewId);
                });
        }
    }
}
