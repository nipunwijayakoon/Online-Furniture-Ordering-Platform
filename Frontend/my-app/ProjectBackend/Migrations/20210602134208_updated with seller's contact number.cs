using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class updatedwithsellerscontactnumber : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Seller_Contact",
                table: "ConfirmedNewDesigns",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Seller_Contact",
                table: "ConfirmedNewDesigns");
        }
    }
}
