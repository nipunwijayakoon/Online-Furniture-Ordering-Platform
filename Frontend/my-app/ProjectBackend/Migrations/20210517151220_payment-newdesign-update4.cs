using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class paymentnewdesignupdate4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Newdesigncode",
                table: "BillingInfoTable",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PayInfo",
                table: "BillingInfoTable",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Newdesigncode",
                table: "BillingInfoTable");

            migrationBuilder.DropColumn(
                name: "PayInfo",
                table: "BillingInfoTable");
        }
    }
}
